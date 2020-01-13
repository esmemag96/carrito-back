import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Products extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'number',
  })
  stars?: number;

  @property({
    type: 'number',
  })
  totalReviews?: number;

  @property({
    type: 'string',
    required: true,
  })
  modelData: string;

  @property({
    type: 'string',
  })
  details?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;
