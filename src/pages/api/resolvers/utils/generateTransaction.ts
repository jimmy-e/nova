import { v4 as uuidv4 } from 'uuid';
import { Transaction } from '@/types';
import { faker } from '@faker-js/faker'

const generateTransaction = (): Transaction => {
  const firstName = faker.name.firstName();

  const nReviewers = Math.floor(Math.random() * 5) + 1;
  const reviewers = Array.from(Array(nReviewers)).map(() => faker.name.fullName());

  return {
    id: uuidv4(),
    created_at: faker.date.between('2022-10-01', '2022-10-30'),
    sender_entity_handle: faker.internet.email(),
    template_name: faker.internet.domainWord(),
    first_recipient_name: firstName,
    first_recipient_email: faker.internet.email(firstName),
    first_recipient_completed_at: faker.date.between('2022-11-01', '2022-11-30'),
    state: string;
    progress: number;
    latest_state_change_at: faker.date.between('2022-12-01', '2022-12-31'),
    reviewer_names: reviewers,
  };
};

export default generateTransaction;
