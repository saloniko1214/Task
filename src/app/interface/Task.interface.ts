export interface Task {
  id: number;
  name: string;
  dueDate: string;
  status: 'completed' | 'pending';
}
