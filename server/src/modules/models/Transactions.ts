import pkg from 'mongoose'

const { model, Schema, Types } = pkg

const TransactionSchema = new Schema<any>({
  amount: {
    type: Number,
    required: [true, 'Пожалуйста, введите число не равное нулю']
  },
  category: {
    type: Types.ObjectId,
    ref: 'Category',
    required: [true, 'Пожалуйста, укажите категорию']
  },
  commentary: {
    type: String,
    trim: true,
    default: ''
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export const TransactionModel = model<any>('Transaction', TransactionSchema)
