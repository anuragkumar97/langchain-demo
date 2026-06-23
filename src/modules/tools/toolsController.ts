

export const getCustomer = async (customerId: string) => {
  return {
    id: customerId,
    name: "Anurag Kumar",
    status: "Active",
  };
};


export const createCustomer = async (name: string) => {
  return {
    success: true,
    customerId: "CUST-1001",
    name,
  };
};


