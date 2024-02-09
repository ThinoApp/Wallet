import {z} from "zod";


const depenseFormSchema = z.object({
    category: z.string().min(1, {
        message: "Please select a category"
    }),
    label: z.string().min(1),
    quantity: z.number().min(1),
    price: z.number().min(1),
    date: z.date({
        required_error: 'Veuillez entrer la date de votre dépense'
    }),
})

//create a zod schema where containing date, category, label, quantity, price
export type DepenseForm = z.infer<typeof depenseFormSchema>
//infer the type of the schema
export default depenseFormSchema;