type Transaction = {
  company: string;
  amount: string;
  description: string;
  date: string;
  icon: string;
  iconBg: string;
};

export default function TransactionCard() {
  const transactions: Transaction[] = [
    {
      company: 'LinkedIn',
      amount: '$200',
      description: 'Buy premium',
      date: '27/05/2023',
      icon: '💼',
      iconBg: 'bg-blue-500',
    },
    {
      company: 'Sketch',
      amount: '$150',
      description: 'Upgrade plan',
      date: '16/06/2023',
      icon: '💎',
      iconBg: 'bg-yellow-500',
    },
    {
      company: 'Spotify',
      amount: '$100',
      description: 'Premium',
      date: '12/04/2023',
      icon: '🎵',
      iconBg: 'bg-green-500',
    },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Non stop transaction</h3>
      
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`w-12 h-12 ${transaction.iconBg} rounded-xl flex items-center justify-center text-2xl`}>
              {transaction.icon}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{transaction.company} {transaction.amount}</p>
              <p className="text-sm text-gray-500">{transaction.description}</p>
              <p className="text-xs text-gray-400 mt-1">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
