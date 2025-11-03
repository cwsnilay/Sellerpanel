import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Package, 
  CreditCard, 
  TrendingUp, 
  Eye, 
  Calendar,
  MapPin,
  Star,
  DollarSign,
  ChevronDown
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 7 days');

  // Stats data
  const stats = [
    { label: 'Orders', value: '16', color: 'bg-orange-500' },
    { label: 'Products', value: '63', color: 'bg-gray-700' }
  ];

  // Transaction data
  const transactions = [
    { id: 'MRKPL00001', customer: 'Test Customer', amount: '$150.00' },
    { id: 'MRKPL00002', customer: 'Test Customer', amount: '$89.99' },
    { id: 'MRKPL00003', customer: 'Test Customer', amount: '$75.50' }
  ];

  // Activities data
  const activities = [
    { time: 'Jun 14', activity: 'New order received' },
    { time: 'Jun 13', activity: 'Product updated' },
    { time: 'Jun 12', activity: 'Customer inquiry' }
  ];

  // Latest Orders data
  const latestOrders = [
    {
      id: '100000001',
      date: 'Jun 14, 2024 8:45 PM',
      customer: 'John Doe',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$140.00',
      purchaseTotal: '$150.00',
      tax: 'test tax',
      status: 'Processing'
    },
    {
      id: '100000002',
      date: 'Jun 14, 2024 7:30 PM',
      customer: 'Jane Smith',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$120.00',
      purchaseTotal: '$130.00',
      tax: 'test tax',
      status: 'Completed'
    },
    {
      id: '100000003',
      date: 'May 16, 2024 6:15 PM',
      customer: 'Mike Johnson',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$100.00',
      purchaseTotal: '$110.00',
      tax: 'test tax',
      status: 'Completed'
    },
    {
      id: '100000004',
      date: 'May 15, 2024 5:20 PM',
      customer: 'Sarah Wilson',
      products: ['Cheesecake Slice Red Velvet Cake 80 g/2.82 oz', 'Cheesecake Slice Red Velvet Cake', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$85.00',
      purchaseTotal: '$95.00',
      tax: 'test tax',
      status: 'Processing'
    }
  ];

  // Recently Added Products
  const recentProducts = [
    {
      id: 1,
      name: 'Cheesecake Slice Red Velvet',
      price: '$15.99',
      status: 'Approved',
      type: 'simple',
      sku: 'ZUUROAD1701-REDVELVET',
      createdAt: 'Jul 31, 2024 8:30 PM',
      quantity: 'Catalog, Search'
    },
    {
      id: 2,
      name: 'test product',
      price: '$10.99',
      status: 'Approved',
      type: 'simple',
      sku: 'ZUUROAD1701-REDVELVET',
      createdAt: 'Jul 31, 2024 10:45 AM',
      quantity: 'Catalog, Search'
    }
  ];

  // Latest Seller Tickets
  const sellerTickets = [
    {
      id: '10000016',
      message: 'Help Req',
      department: 'buyer_dept',
      agentName: 'admin',
      status: 'Open',
      priority: 'Normal'
    }
  ];

  // Recently Transaction
  const recentTransactions = [
    {
      type: 'order',
      incomeAmount: '$250.00',
      expenseAmount: '$225.00',
      netAmount: '$25.00',
      status: 'completed',
      createdDate: '2024-06-14 04:12:06'
    },
    {
      type: 'order',
      incomeAmount: '$180.00',
      expenseAmount: '$160.00',
      netAmount: '$20.00',
      status: 'completed',
      createdDate: '2024-06-13 02:30:15'
    }
  ];

  // Recently Product Review
  const productReviews = [
    {
      id: 1,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Bread Product',
      reviewText: 'It is a long established fact that a reader will be distracted by the readable...',
      rating: 5,
      reviewSummary: 'for client'
    },
    {
      id: 2,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Bread ring',
      reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
      rating: 5,
      reviewSummary: 'for client'
    },
    {
      id: 3,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Red Velvet',
      reviewText: 'I recently purchased this ring and I couldn\'t be happier! The craftsmanship is a...',
      rating: 5,
      reviewSummary: 'for client'
    },
    {
      id: 4,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Red Velvet',
      reviewText: 'I recently purchased this ring and I couldn\'t be happier! The craftsmanship is a...',
      rating: 5,
      reviewSummary: 'for client'
    }
  ];

  // Shipping Order
  const shippingOrders = [
    {
      id: '100000002',
      customer: 'ZUUROAD02',
      shipment: 'ZUUROAD02',
      date: 'Jun 14, 2024 8:45 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000003',
      customer: 'ZUUROAD03',
      shipment: 'ZUUROAD03',
      date: 'Jun 14, 2024 7:30 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000004',
      customer: 'ZUUROAD04',
      shipment: 'ZUUROAD04',
      date: 'Jun 14, 2024 6:15 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000005',
      customer: 'ZUUROAD05',
      shipment: 'ZUUROAD05',
      date: 'Jun 14, 2024 5:20 PM',
      products: ['Cheesecake Slice Red Velvet Cake 80 g/2.82 oz', 'Cheesecake Slice Red Velvet Cake', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000006',
      customer: 'ZUUROAD06',
      shipment: 'ZUUROAD06',
      date: 'Jun 14, 2024 4:10 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000007',
      customer: 'ZUUROAD07',
      shipment: 'ZUUROAD07',
      date: 'Jun 14, 2024 3:30 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000008',
      customer: 'ZUUROAD08',
      shipment: 'ZUUROAD08',
      date: 'Jun 14, 2024 2:45 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000009',
      customer: 'ZUUROAD09',
      shipment: 'ZUUROAD09',
      date: 'Jun 14, 2024 1:20 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000010',
      customer: 'ZUUROAD10',
      shipment: 'ZUUROAD10',
      date: 'Jun 14, 2024 12:15 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Open': return 'bg-green-100 text-green-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="space-y-6 p-6">
      {/* Top Row - Stats, Lifetime Sales, Map, Transactions, Activities */}
      <div className="grid grid-cols-12 gap-6">
        {/* Stats */}
        <div className="col-span-2 space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 ${stat.color} rounded-xl shadow-md`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Lifetime Sales */}
        <div className="col-span-3 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white rounded-xl p-6 shadow-xl">
          <h3 className="text-sm font-semibold mb-2 text-slate-300">Lifetime Sales</h3>
          <p className="text-3xl font-bold">₹ 320.29K</p>
          <div className="mt-4 h-32 bg-slate-900/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-700/50">
            <div className="text-center">
              <MapPin size={32} className="text-slate-400 mx-auto mb-2" />
              <p className="text-xs text-slate-400">Sales visualization</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-span-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white">
          <div className="h-48 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 rounded-lg">
              <div className="flex items-center justify-center h-full">
                <div className="w-5 h-5 bg-emerald-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>₹85,156 ₹ 85,156.4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions & Activities */}
        <div className="col-span-3 space-y-4">
          {/* Transactions */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-white hover:shadow-xl transition-all duration-300">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Transaction</h3>
            <div className="space-y-3">
              {transactions.map((transaction, index) => (
                <div key={index} className="flex justify-between items-center text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <span className="text-slate-600 font-medium">{transaction.id}</span>
                  <span className="font-bold text-slate-900">{transaction.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-white hover:shadow-xl transition-all duration-300">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Activities</h3>
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div key={index} className="text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <div className="text-slate-500 text-xs font-medium">{activity.time}</div>
                  <div className="text-slate-700 font-medium">{activity.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Latest Orders */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-gradient-to-r from-slate-50 to-blue-50">
          <h3 className="text-lg font-bold text-slate-900">Latest Orders</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-all">
            View All Orders
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Order</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Date/Time</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Products</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Base Total</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Purchase Total</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Tax</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">View</th>
              </tr>
            </thead>
            <tbody className="bg-white/50 backdrop-blur-sm divide-y divide-slate-200">
              {latestOrders.map((order) => (
                <tr key={order.id} className="hover:bg-white/80 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    <div className="space-y-1">
                      {order.products.slice(0, 2).map((product, idx) => (
                        <div key={idx} className="font-medium">{product}</div>
                      ))}
                      {order.products.length > 2 && (
                        <div className="text-slate-400 font-semibold">+{order.products.length - 2} more</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{order.baseTotal}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{order.purchaseTotal}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{order.tax}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-lg text-xs font-bold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recently Added Products */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-gradient-to-r from-slate-50 to-blue-50">
          <h3 className="text-lg font-bold text-slate-900">Recently Added Products</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Product Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">SKU</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Created At</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Visibility</th>
              </tr>
            </thead>
            <tbody className="bg-white/50 backdrop-blur-sm divide-y divide-slate-200">
              {recentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-white/80 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{product.name}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{product.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-lg text-xs font-bold ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{product.type}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{product.sku}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{product.createdAt}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Latest Seller Tickets */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-gradient-to-r from-slate-50 to-blue-50">
          <h3 className="text-lg font-bold text-slate-900">Latest Seller Tickets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Ticket Id</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Message</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Agent Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white/50 backdrop-blur-sm divide-y divide-slate-200">
              {sellerTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-white/80 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{ticket.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{ticket.message}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{ticket.department}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{ticket.agentName}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-lg text-xs font-bold ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">{ticket.priority}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold hover:underline">Reply</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recently Transaction */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-gradient-to-r from-slate-50 to-blue-50">
          <h3 className="text-lg font-bold text-slate-900">Recently Transaction</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-all">
            View All Transaction
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Transaction Type</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Income Amount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Expense Amount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Net Amount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Created Date</th>
              </tr>
            </thead>
            <tbody className="bg-white/50 backdrop-blur-sm divide-y divide-slate-200">
              {recentTransactions.map((transaction, index) => (
                <tr key={index} className="hover:bg-white/80 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-900">{transaction.type}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{transaction.incomeAmount}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{transaction.expenseAmount}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{transaction.netAmount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-lg text-xs font-bold ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{transaction.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recently Product Review */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-gradient-to-r from-slate-50 to-blue-50">
          <h3 className="text-lg font-bold text-slate-900">Recently Product Review</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Customer Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Product Sku</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Review Title</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Review Text</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Rating Summary for client</th>
              </tr>
            </thead>
            <tbody className="bg-white/50 backdrop-blur-sm divide-y divide-slate-200">
              {productReviews.map((review) => (
                <tr key={review.id} className="hover:bg-white/80 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{review.customer}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{review.productSku}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{review.product}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate">{review.reviewText}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-slate-600">{review.reviewSummary}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shipping Order */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-gradient-to-r from-slate-50 to-blue-50">
          <h3 className="text-lg font-bold text-slate-900">Shipping Order</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">#</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Order</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Shipment</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Date/Time</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Products</th>
              </tr>
            </thead>
            <tbody className="bg-white/50 backdrop-blur-sm divide-y divide-slate-200">
              {shippingOrders.map((order, index) => (
                <tr key={order.id} className="hover:bg-white/80 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-900">{index + 1}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{order.shipment}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    <div className="space-y-1">
                      {order.products.slice(0, 2).map((product, idx) => (
                        <div key={idx} className="font-medium">{product}</div>
                      ))}
                      {order.products.length > 2 && (
                        <div className="text-slate-400 font-semibold">+{order.products.length - 2} more</div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Shipping Pickup */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
          <h3 className="text-lg font-bold text-slate-900">Order Shipping Pickup</h3>
        </div>
        <div className="p-8">
          <div className="text-center text-slate-500">
            <p className="font-medium">No scheduled pickup records</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;