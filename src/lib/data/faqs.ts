import { pb } from '$lib/pocketbase';

export interface FaqItem {
    id: string;
    collectionId?: string;
    collectionName?: string;
    question: string;
    answer: string;
    created?: string;
    updated?: string;
}

/**
 * Fetch FAQs from PocketBase
 */
export async function getFaqs(): Promise<FaqItem[]> {
    try {
        const records = await pb.collection('faqData').getFullList<FaqItem>({
            sort: 'created',
        });
        return records;
    } catch (error) {
        console.error('Error fetching faqs:', error);
        return [];
    }
}

export default getFaqs;
