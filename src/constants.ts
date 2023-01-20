export const reviewer = [
  { label: 'Tom Cruise', value: 'tomCruise' },
  { label: 'Keanu Reeves', value: 'keanuReeves' },
  { label: 'Emma Stone', value: 'emmaStone' },
  { label: 'Mila Kunis', value: 'milaKunis' },
  { label: 'Sandra Bullock', value: 'sandraBullock' },
];

export const state = [
  { label: 'Created', value: 'created' },
  { label: 'Invited', value: 'invited' },
  { label: 'In Progress', value: 'In Progress' },
  { label: 'Submitted', value: 'submitted' },
  { label: 'Pending', value: 'pending' },
  { label: 'Completed', value: 'completed' },
];

export const stateColors: Record<string, string> = {
  created: 'text',
  invited: 'subdued',
  inProgress: 'warning',
  submitted: 'success',
  pending: 'danger',
  completed: 'text',
};
