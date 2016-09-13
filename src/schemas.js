import { normalize, Schema } from 'normalizr';

export const serviceSchema = new Schema('service', {idAttribute: '_id'});
export const personalSchema = new Schema('personal', {idAttribute: '_id'});
