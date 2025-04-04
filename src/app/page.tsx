// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Record } from './types/types';
import RecordForm from './components/Record-Form';
import RecordsTable from './components/Record-Table';


const LOCAL_STORAGE_KEY = 'formRecords';

const initialFormState: Omit<Record, 'id' | 'valid'> = {
  title: '',
  description: '',
  email: '',
  range: 0,
};

export default function Home() {
  const [records, setRecords] = useState<Record[]>([]);

  
  useEffect(() => {
    const savedRecords = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords));
    } else {
      
      const dummyData: Record[] = [
        { id: 1, title: 'document1', description: 'desc1', email: 'test@test.com', range: 32, valid: true },
      ];
      setRecords(dummyData);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dummyData));
    }
  }, []);

  const handleFormSubmit = (formData: Omit<Record, 'id' | 'valid'>) => {
    const nextId = records.length > 0 ? Math.max(...records.map(r => r.id)) + 1 : 1;
    
    const newRecord: Record = {
      ...formData,
      id: nextId,
      valid: true,
    };
    
    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedRecords));
  };


  const filteredRecords = records.filter(record => 
    record.valid === true && record.range > 29 && record.range < 61
  );

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Record Form</h1>
      
      <RecordForm 
        onSubmit={handleFormSubmit} 
        initialFormState={initialFormState} 
      />
      
      <h2 className="text-xl font-bold mt-8 mb-4">Filtered Records</h2>
      <p className="mb-4 text-gray-600">
        Showing records where: valid=true and 29 &lt; range &lt; 61
      </p>
      
      <RecordsTable records={filteredRecords} />
    </div>
  );
}