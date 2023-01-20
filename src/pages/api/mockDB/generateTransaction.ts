import { v4 as uuidv4 } from 'uuid';
import { Transaction } from '@/types';
import { shuffle } from 'lodash';
import { faker } from '@faker-js/faker'
import { progress, reviewer, state } from '@/constants';
import { arrayRandom } from '@/utils';

const generateTransaction = (): Transaction => {
  const firstName = faker.name.firstName();

  const nReviewers = Math.floor(Math.random() * 5) + 1;
  const reviewers = shuffle(reviewer).slice(0, nReviewers).map((reviewer) => reviewer.value);

  return {
    id: uuidv4(),
    created_at: faker.date.between('2022-10-01', '2022-10-30').toISOString(),
    sender_entity_handle: faker.internet.email(),
    template_name: faker.internet.domainWord(),
    first_recipient_name: firstName,
    first_recipient_email: faker.internet.email(firstName),
    first_recipient_completed_at: faker.date.between('2022-11-01', '2022-11-30').toISOString(),
    state: arrayRandom(state).value,
    progress: arrayRandom(progress).value,
    latest_state_change_at: faker.date.between('2022-12-01', '2022-12-31').toISOString(),
    reviewer_names: reviewers,
  };
};

export default generateTransaction;
