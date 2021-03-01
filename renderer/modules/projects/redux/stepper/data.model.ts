import { ChangeEvent } from 'react';

export interface INgData {
  name: ValueType;
  routing: ValueType;
  styling: ValueType;
  workspace: ValueType;
}

export interface ValueType {
  value: string;
  valid?: boolean;
  error?: string;
  touched?: boolean;
}

export interface EventType {
  event?: ChangeEvent<HTMLInputElement>;
  dir?: string[];
}

export interface FormParams {
  value: string;
  error: string;
  valid: boolean;
}

export interface ProjectDetails {
  name: string;
  domain: string;
  date: string;
  path: string;
  workspace: string;
}

export interface ProjectDeleteUpdates {
  projects: ProjectDetails[];
  message: string;
}

export interface SearchForm {
  searchValue: string;
  filterValue: string;
}
