import { CalculateOrderFeeResult,parseAndVerifyRequest } from '@nft/service'
import { NextApiRequest,NextApiResponse } from 'next'

const DISCOUNT_START_TIME = new Date('2024-01-01T00:00:00Z')
const DISCOUNT_END_TIME = new Date('2024-01-07T23:59:59Z')
const DISCOUNT_PERCENTAGE = 0.8 // 20% discount

export default async function fees(
  req: NextApiRequest,
  res: NextApiResponse<CalculateOrderFeeResult>,
): Promise<void> {
  try {
    const args = await parseAndVerifyRequest<'CALCULATE_ORDER_FEES'>(
      req,
      "tgRreS/HF92JMOOfa0wYMRUcAcivgHum0cotrPrRAhAJwYMCqdlaBtFsAuHXU1Pl",
    )

    const currentTime = new Date()

    // Check if the current time is within the discount period
    const isInDiscountPeriod =
      currentTime >= DISCOUNT_START_TIME && currentTime <= DISCOUNT_END_TIME

    // Calculate fees with or without discount
    const fees = isInDiscountPeriod
      ? calculateFeesWithDiscount(args)
      : calculateRegularFees(args)

    res.status(200).json(fees)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).end()
  }
}

function calculateRegularFees(args: any): CalculateOrderFeeResult {
  // Implement your regular fee calculation logic here
  // For this example, let's assume a flat 5% fee
  const regularFeePercentage = 0.05
  const regularFeeValue = (
    args.unitPrice *
    args.quantity *
    regularFeePercentage
  ).toString() // Convert the numeric value to string
  return [{ account: '0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6', value: regularFeeValue }]
}

function calculateFeesWithDiscount(args: any): CalculateOrderFeeResult {
  // Implement your discounted fee calculation logic here
  const discountFeePercentage = DISCOUNT_PERCENTAGE
  const discountedFeeValue =
    (args.unitPrice * args.quantity * discountFeePercentage).toString()
  return [{ account: '0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6', value: discountedFeeValue }]
}

export const config = {
  api: {
    bodyParser: false,
  },
}