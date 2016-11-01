import test from 'ava';
import { handler as Skill } from '..';
import Request from 'alexa-request';

test('LaunchRequest', t => {
  const event = Request.launchRequest().build();
  return Skill(event).then(response => t.truthy(response));
});

test('Strategy intent', t => {
  const event = Request.intent('strategy').build();
  return Skill(event).then(response => t.truthy(response));
});
