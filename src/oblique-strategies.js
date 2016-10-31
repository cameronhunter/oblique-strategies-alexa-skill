import { Skill, Launch, Intent } from 'alexa-annotations';
import { say, ask } from 'alexa-response';
import ssml from 'alexa-ssml-jsx';

@Skill
export default class Obliquestrategies {

  @Launch
  launch() {
    return say('Obliquestrategies launched!');
  }

  @Intent('hello')
  hello({ name = 'world' }) {
    return say(`Hello ${name}`).card({ title: 'Obliquestrategies', content: `Hello ${name}` });
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    return ask('I say hello to people. Who should I say hello to?').reprompt('Who should I say hello to?');
  }

  @Intent('AMAZON.CancelIntent', 'AMAZON.StopIntent')
  stop() {
    return say(<speak>Goodbye!</speak>);
  }

}
