
export interface Record {
    id: number;
    title: string;
    description?: string;
    email: string;
    range: number;
    valid: boolean;
  }
  
  export interface RecordsTableProps {
    records: Record[];
  }
  
  export interface RecordFormProps {
    onSubmit: (formData: Omit<Record, 'id' | 'valid'>) => void;
    initialFormState: Omit<Record, 'id' | 'valid'>;
  }