import React from "react";

const columns = [
  {
    field: "product_name",
    headerName: "Product name",
  },
  {
    field: "color",
    headerName: "Color",
  },
  {
    field: "category",
    headerName: "Category",
  },
  {
    field: "accessories",
    headerName: "Accessories",
  },
  {
    field: "available",
    headerName: "Available",
  },
  {
    field: "price",
    headerName: "Price",
  },
  {
    field: "weight",
    headerName: "Weight",
  },
  {
    field: "action",
    headerName: "Action",
  },
];

const rows = [
  {
    product_name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Apple",
    accessories: "Laptop",
    available: "In Stock",
    price: "499",
    weight: "300 g",
    action: "action",
  },
  {
    product_name: "Apple MacBook Pro 17",
    color: "Silver",
    category: "Apple",
    accessories: "Laptop",
    available: "In Stock",
    price: "499",
    weight: "300 g",
    action: "action",
  },
];

const rowCol = [
  [
    { value: "Yellow" },
    { value: "silvar" },
    { value: "orange" },
    { value: "pink" },
    { value: "red" },
    { value: "green" },
    { value: "neon" },
    { value: "violet" },
  ],
  [
    { value: "Yellow" },
    { value: "silvar" },
    { value: "orange" },
    { value: "pink" },
    { value: "red" },
    { value: "green" },
    { value: "neon" },
    { value: "violet" },
  ],
];

const Users = () => {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 border">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  border-b">
          <tr>
            {columns?.map((column, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3 border-r">
                  {column.headerName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rowCol.map((cols, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b 0 y-700 border-gray-200 hover:bg-gray-50 ray-600"
              >
                {cols?.map((value, index) => {
                  return (
                    <td key={index} className="px-6 py-4 border-b border-r">
                      {value?.value}
                    </td>
                  );
                })}
              </tr>
            );
          })}

          <tr class="bg-white border-b 0 y-700 border-gray-200 hover:bg-gray-50 ray-600">
            <th
              scope="row"
              class="px-6 py-4 border-b border-r font-medium text-gray-900 whitespace-nowrap "
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4 border-b border-r">White</td>
            <td class="px-6 py-4 border-b border-r">Laptop PC</td>
            <td class="px-6 py-4 border-b border-r">No</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">$1999</td>
            <td class="px-6 py-4 border-b border-r">1.0 lb.</td>
            <td class="flex items-center px-6 py-4 border-b border-r">
              <a href="#" class="font-medium  hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </a>
              <a href="#" class="font-medium  hover:underline ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b 0 y-700 border-gray-200 hover:bg-gray-50 ray-600">
            <th
              scope="row"
              class="px-6 py-4 border-b border-r font-medium text-gray-900 whitespace-nowrap "
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4 border-b border-r">Black</td>
            <td class="px-6 py-4 border-b border-r">Accessories</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">No</td>
            <td class="px-6 py-4 border-b border-r">$99</td>
            <td class="px-6 py-4 border-b border-r">0.2 lb.</td>
            <td class="flex items-center px-6 py-4 border-b border-r">
              <a href="#" class="font-medium  hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </a>
              <a href="#" class="font-medium  hover:underline ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b 0 y-700 border-gray-200 hover:bg-gray-50 ray-600">
            <th
              scope="row"
              class="px-6 py-4 border-b border-r font-medium text-gray-900 whitespace-nowrap "
            >
              Apple Watch
            </th>
            <td class="px-6 py-4 border-b border-r">Black</td>
            <td class="px-6 py-4 border-b border-r">Watches</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">No</td>
            <td class="px-6 py-4 border-b border-r">$199</td>
            <td class="px-6 py-4 border-b border-r">0.12 lb.</td>
            <td class="flex items-center px-6 py-4 border-b border-r">
              <a href="#" class="font-medium  hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </a>
              <a href="#" class="font-medium  hover:underline ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b 0 y-700 border-gray-200 hover:bg-gray-50 ray-600">
            <th
              scope="row"
              class="px-6 py-4 border-b border-r font-medium text-gray-900 whitespace-nowrap "
            >
              Apple iMac
            </th>
            <td class="px-6 py-4 border-b border-r">Silver</td>
            <td class="px-6 py-4 border-b border-r">PC</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">$2999</td>
            <td class="px-6 py-4 border-b border-r">7.0 lb.</td>
            <td class="flex items-center px-6 py-4 border-b border-r">
              <a href="#" class="font-medium  hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </a>
              <a href="#" class="font-medium  hover:underline ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b 0 y-700 border-gray-200 hover:bg-gray-50 ray-600">
            <th
              scope="row"
              class="px-6 py-4 border-b border-r font-medium text-gray-900 whitespace-nowrap "
            >
              Apple AirPods
            </th>
            <td class="px-6 py-4 border-b border-r">White</td>
            <td class="px-6 py-4 border-b border-r">Accessories</td>
            <td class="px-6 py-4 border-b border-r">No</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">$399</td>
            <td class="px-6 py-4 border-b border-r">38 g</td>
            <td class="flex items-center px-6 py-4 border-b border-r">
              <a href="#" class="font-medium  hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </a>
              <a href="#" class="font-medium  hover:underline ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b 0 y-700 border-gray-200 hover:bg-gray-50 ray-600">
            <th
              scope="row"
              class="px-6 py-4 border-b border-r font-medium text-gray-900 whitespace-nowrap "
            >
              iPad Pro
            </th>
            <td class="px-6 py-4 border-b border-r">Gold</td>
            <td class="px-6 py-4 border-b border-r">Tablet</td>
            <td class="px-6 py-4 border-b border-r">No</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">$699</td>
            <td class="px-6 py-4 border-b border-r">1.3 lb.</td>
            <td class="flex items-center px-6 py-4 border-b border-r">
              <a href="#" class="font-medium  hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </a>
              <a href="#" class="font-medium  hover:underline ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b 0 y-700 border-gray-200 hover:bg-gray-50 ray-600">
            <th
              scope="row"
              class="px-6 py-4 border-b border-r font-medium text-gray-900 whitespace-nowrap "
            >
              Magic Keyboard
            </th>
            <td class="px-6 py-4 border-b border-r">Black</td>
            <td class="px-6 py-4 border-b border-r">Accessories</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">$99</td>
            <td class="px-6 py-4 border-b border-r">453 g</td>
            <td class="flex items-center px-6 py-4 border-b border-r">
              <a href="#" class="font-medium  hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </a>
              <a href="#" class="font-medium  hover:underline ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b 0 y-700 border-gray-200 hover:bg-gray-50 ray-600">
            <th
              scope="row"
              class="px-6 py-4 border-b border-r font-medium text-gray-900 whitespace-nowrap "
            >
              Apple TV 4K
            </th>
            <td class="px-6 py-4 border-b border-r">Black</td>
            <td class="px-6 py-4 border-b border-r">TV</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">No</td>
            <td class="px-6 py-4 border-b border-r">$179</td>
            <td class="px-6 py-4 border-b border-r">1.78 lb.</td>
            <td class="flex items-center px-6 py-4 border-b border-r">
              <a href="#" class="font-medium  hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </a>
              <a href="#" class="font-medium  hover:underline ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b 0 y-700 border-gray-200 hover:bg-gray-50 ray-600">
            <th
              scope="row"
              class="px-6 py-4 border-b border-r font-medium text-gray-900 whitespace-nowrap "
            >
              AirTag
            </th>
            <td class="px-6 py-4 border-b border-r">Silver</td>
            <td class="px-6 py-4 border-b border-r">Accessories</td>
            <td class="px-6 py-4 border-b border-r">Yes</td>
            <td class="px-6 py-4 border-b border-r">No</td>
            <td class="px-6 py-4 border-b border-r">$29</td>
            <td class="px-6 py-4 border-b border-r">53 g</td>
            <td class="flex items-center px-6 py-4 border-b border-r">
              <a href="#" class="font-medium  hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </a>
              <a href="#" class="font-medium  hover:underline ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
