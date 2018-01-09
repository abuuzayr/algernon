import { Category } from '../models/category.model';

export const MOCKCATEGORIES: Category[] = [
    {
        id: 'category10001',
        name: 'Music',
        slug: 'music',
        parentRef: '',
        childrenRef: ['category10011', 'category10012']
    },
    {
        id: 'category10011',
        name: 'Albums',
        slug: 'albums',
        parentRef: 'category10001',
        childrenRef: ['category10112']
    },
    {
        id: 'category10012',
        name: 'Singles',
        slug: 'singles',
        parentRef: 'category1001',
        childrenRef: ['category10111']
    },
    {
        id: 'category10111',
        name: 'Rock',
        slug: 'rock',
        parentRef: 'category10012',
        childrenRef: []
    },
    {
        id: 'category10112',
        name: 'Rock',
        slug: 'rock',
        parentRef: 'category10011',
        childrenRef: []
    }
];
