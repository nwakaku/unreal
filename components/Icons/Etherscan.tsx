import { chakra } from '@chakra-ui/react'

type Props = {
  size?: number
}

const Etherscan = ({ ...props }: Props) => {
  return (
    <chakra.svg
      viewBox="0 0 18 16"
      xmlns="http://www.w3.org/2000/svg"
      boxSizing="content-box"
      fill="currentcolor"
      {...props}
    >
      <path d="M4.3236 7.61791C4.32359 7.52855 4.34122 7.44008 4.3755 7.35756C4.40978 7.27505 4.46003 7.20012 4.52335 7.13708C4.58667 7.07404 4.66183 7.02413 4.7445 6.99022C4.82717 6.95631 4.91572 6.93907 5.00507 6.93949L6.13488 6.94319C6.31502 6.94319 6.48779 7.01475 6.61517 7.14213C6.74255 7.26952 6.81412 7.44228 6.81412 7.62243V11.8946C6.94139 11.8569 7.10462 11.8167 7.28343 11.7748C7.40759 11.7456 7.51824 11.6753 7.59744 11.5753C7.67664 11.4753 7.71975 11.3515 7.71978 11.224V5.92464C7.71977 5.74447 7.79132 5.57168 7.9187 5.44427C8.04608 5.31686 8.21885 5.24526 8.39902 5.24524H9.53112C9.71128 5.24528 9.88404 5.31688 10.0114 5.44429C10.1388 5.57169 10.2104 5.74448 10.2104 5.92464V10.8431C10.2104 10.8431 10.4937 10.7284 10.7698 10.6118C10.8724 10.5685 10.9599 10.4958 11.0214 10.4031C11.083 10.3103 11.1159 10.2014 11.116 10.0901V4.22624C11.116 4.13705 11.1335 4.04873 11.1676 3.96633C11.2018 3.88392 11.2518 3.80905 11.3149 3.74597C11.3779 3.6829 11.4528 3.63287 11.5352 3.59873C11.6176 3.56459 11.7059 3.54702 11.7951 3.54701H12.9272C13.1073 3.54701 13.2801 3.61857 13.4075 3.74595C13.5349 3.87333 13.6065 4.04609 13.6065 4.22624V9.05478C14.5879 8.34351 15.5826 7.48796 16.372 6.45927C16.4865 6.30995 16.5623 6.13461 16.5926 5.94888C16.6228 5.76315 16.6067 5.57281 16.5455 5.39485C16.0114 3.83834 15.0096 2.48479 13.677 1.51927C12.3445 0.553754 10.7462 0.0233994 9.10076 0.000725266C4.66374 -0.0588789 0.996774 3.56308 0.99721 8.00065C0.992853 9.40484 1.35934 10.7853 2.05962 12.0024C2.1562 12.1689 2.29827 12.3043 2.46916 12.3929C2.64005 12.4814 2.83266 12.5193 3.02435 12.5022C3.23852 12.4833 3.50516 12.4567 3.82214 12.4195C3.96011 12.4038 4.08748 12.3379 4.18001 12.2343C4.27253 12.1308 4.32373 11.9968 4.32387 11.858V7.61791" />
      <path d="M4.29897 14.47C5.49225 15.338 6.90241 15.8591 8.37344 15.9755C9.84447 16.0919 11.319 15.7991 12.634 15.1294C13.9489 14.4598 15.053 13.4395 15.824 12.1813C16.5951 10.9232 17.0031 9.47625 17.0028 8.00062C17.0028 7.81642 16.9943 7.63428 16.982 7.45312C14.0594 11.8117 8.66321 13.8497 4.29892 14.4701" />
    </chakra.svg>
  )
}

export default chakra(Etherscan)