import { Skill, Launch, Intent } from 'alexa-annotations';
import Response from 'alexa-response';
import ssml from 'alexa-ssml-jsx';
import fetch from 'isomorphic-fetch';

const ApiEndpoint = 'http://brianeno.needsyourhelp.org/draw';

const Intro = ({ strategy }) => (
  `Oblique Strategies are a collection of brief aphorisms meant to stimulate creativity. For example: "${strategy}".`
);

const Card = ({ strategy, edition, cardnumber }) => ({
  title: 'Oblique Strategy',
  content: `${strategy}\n\nEdition: ${edition}\nCard number: ${cardnumber}`
});

const WouldYouLikeAnother = 'Would you like to hear another?';

const speech = (primarySpeech, secondarySpeech) => (
  <speak>
    <s>{primarySpeech}</s>
    <break time='1s' />
    <s>{secondarySpeech}</s>
  </speak>
);

@Skill
export default class ObliqueStrategies {

  @Launch
  @Intent('AMAZON.HelpIntent')
  launch() {
    return this.getStrategy().then(strategy => Response.build({
      ask: speech(Intro(strategy), WouldYouLikeAnother),
      reprompt: WouldYouLikeAnother,
      card: Card(strategy)
    }));
  }

  @Intent('AMAZON.YesIntent', 'strategy')
  strategy() {
    return this.getStrategy().then(strategy => Response.build({
      ask: speech(`Here's a strategy: "${strategy.strategy}".`, WouldYouLikeAnother),
      reprompt: WouldYouLikeAnother,
      card: Card(strategy)
    }));
  }

  @Intent('AMAZON.NoIntent', 'AMAZON.CancelIntent', 'AMAZON.StopIntent')
  stop() {
    return Response.say('Goodbye!');
  }

  getStrategy() {
    return fetch(ApiEndpoint).then(_ => _.json()).then(strategy => {
      const isBlank = strategy.strategy === '[blank white card]';
      return isBlank ? this.getStrategy() : strategy;
    });
  }

}
