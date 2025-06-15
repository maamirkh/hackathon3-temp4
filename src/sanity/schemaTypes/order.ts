export const order = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'firstName',
            type: 'string',
            title: 'First Name',
        },
        {
            name: 'lastName',
            type: 'string',
            title: 'Last Name',
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone',            
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City',
        },
        {
            name: 'zipCode',
            type: 'string',
            title: 'Zip Code',
        },
        {
            name: 'discount',
            type: 'number',
            title: 'Discount'
        },
        {
            name: 'cartItems',
            type: 'array',
            title: 'Cart Items',
            of: [{ type: 'reference', to: [{ type: 'product'}] }], // ✅ FIXED
        },
        
        {
            name: 'total',
            type: 'number',
            title: 'Total',
        },
        {
            name: 'orderDate',
            type: 'date',
            title: 'Order Date',
        },
        {
            name: 'status',
            type: 'string',
            title: 'Order Status',
            options: {
                list: [
                    { title: 'pending', value: 'Pending' },
                    { title: 'shipped', value: 'Shipped' },
                    { title: 'delivered', value: 'Delivered' },
                ],
                layout : 'radio'     
        },
        initialValue : 'pending'
    }
    ]
}