import { v4 as uuidv4 } from 'uuid';
import { Transaction } from '@/types';
import { shuffle } from 'lodash';
import { faker } from '@faker-js/faker'
import { reviewers, states } from '@/constants';
import { arrayRandom, randomN } from '@/utils';

const generateTransaction = (): Transaction => {
  const recipientName = faker.name.fullName();

  const nReviewers = randomN(5);
  const finalReviewers = shuffle(reviewers).slice(0, nReviewers).map((reviewer) => reviewer.value);

  return {
    id: uuidv4(),
    created_at: faker.date.between('2022-10-01', '2022-10-30').toISOString(),
    first_recipient_completed_at: faker.date.between('2022-11-01', '2022-11-30').toISOString(),
    first_recipient_email: faker.internet.email(recipientName),
    first_recipient_name: recipientName,
    invited_by: faker.name.fullName(),
    latest_state_change_at: faker.date.between('2022-12-01', '2022-12-31').toISOString(),
    progress: randomN(5),
    reviewer_names: finalReviewers,
    sender_entity_handle: faker.internet.email(),
    state: arrayRandom(states).value,
    template_name: faker.internet.domainWord(),
  };
};

export default generateTransaction;
