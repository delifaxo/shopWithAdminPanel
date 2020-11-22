import axios from 'axios'

export const reservedProductId = (data) => axios.post('/api/reserved-product', data)