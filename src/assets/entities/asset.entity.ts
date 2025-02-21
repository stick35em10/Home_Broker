import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
//import crypto from 'crypto';

export type AssetDocument = HydratedDocument<Asset>;

@Schema({timestamps: true})
export class Asset {
    @Prop({default: ()=> crypto.randomUUID()})//diz que e' uma propriedade da coleccao
    _id:        string;
    @Prop()
    name:       string;
    @Prop()
    symbol:     string;
    @Prop()
    image:      string;
    @Prop()
    price:      number;

    createdAt!:  Date;//! indica que apenas esta sendo modelado no typescript
    updateAt!:   Date;
}

// criando a instancia
export const AssetSchema = SchemaFactory.createForClass(Asset);