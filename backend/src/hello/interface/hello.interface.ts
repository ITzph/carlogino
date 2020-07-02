import { Document } from 'mongoose';

export interface Hello extends Document {
    readonly greeting: string,
}