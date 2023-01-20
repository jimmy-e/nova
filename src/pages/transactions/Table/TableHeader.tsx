import React from 'react';
import { Column, TableHeader as AriaTableHeader } from '@react-stately/table';

const TableHeader: React.FC = () => (
  <AriaTableHeader>
    <Column>Last Updated</Column>
    <Column>Recipient</Column>
    <Column>Template</Column>
    <Column>Invited By</Column>
    <Column>Reviewers</Column>
    <Column>Unique ID</Column>
  </AriaTableHeader>
);

export default TableHeader;
