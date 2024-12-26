import { Box, Button, Card, Divider, Grid, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import { CartItem } from "./CartItem";
import { AddressCart } from "./AddressCart";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const items = [1, 1];

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: ""
}

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required('Street address is required'),
  state: Yup.string().required('State is required'),
  pincode: Yup.string()
    .required('Pincode is required')
    .matches(/^[0-9]{6}$/, 'Pincode must be 6 digits'),
  city: Yup.string().required('City is required')
});

export const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const createOrderUsingSelectedAddress = () => {};

  const handleOpenAddressModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Values:", values);
    // Implement your address submission logic here
    setSubmitting(false);
    handleClose();
  };

  return (
    <>
      <main className="lg:flex flex-row items-start justify-start space-x-6">
        {/* Left Section: Cart Items and Billing Details */}
        <section className="lg:w-[65%] space-y-6 lg:max-h-screen pt-10">
          {/* Cart Items Section */}
          <div className="space-y-6">
            {items.map((item, index) => (
              <CartItem key={index} />
            ))}
          </div>

          {/* Billing Details Section */}
          <div className="billDetails px-5 text-sm">
            <Divider />
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-5 text-left">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>$50.99</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Fee</p>
                <p>$5.99</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>$3.99</p>
              </div>
              <Divider />
              <div className="flex justify-between text-gray-400">
                <p>Net Total</p>
                <p>$70.99</p>
              </div>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" />
        <section className="lg:w-[35%] flex flex-col items-center px-5 pt-10">
          <h1 className="text-center font-semibold text-2xl py-5">
            Choose Delivery Address
          </h1>
          <div className="flex gap-5 flex-wrap justify-center">
            {[1, 1].map((item, index) => (
              <AddressCart
                key={index}
                handleSelectAddress={createOrderUsingSelectedAddress}
                item={item}
                showButton={true}
              />
            ))}
            <Card className="flex gap-5 w-64 p-5">
              <AddLocationAltIcon />
              <div className="space-y-3 text-gray-500">
                <h1 className="text-lg font-semibold">Add new address</h1>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleOpenAddressModal}
                >
                  Add
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-address-modal"
        aria-describedby="add-new-address-form"
      >
        <Box sx={style}>
          <Typography id="add-address-modal" variant="h6" component="h2" mb={2}>
            Add New Address
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="streetAddress"
                      label="Street Address"
                      fullWidth
                      variant="outlined"
                      error={touched.streetAddress && Boolean(errors.streetAddress)}
                      helperText={touched.streetAddress && errors.streetAddress}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="state"
                      label="State"
                      fullWidth
                      variant="outlined"
                      error={touched.state && Boolean(errors.state)}
                      helperText={touched.state && errors.state}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="city"
                      label="City"
                      fullWidth
                      variant="outlined"
                      error={touched.city && Boolean(errors.city)}
                      helperText={touched.city && errors.city}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="pincode"
                      label="Pincode"
                      fullWidth
                      variant="outlined"
                      error={touched.pincode && Boolean(errors.pincode)}
                      helperText={touched.pincode && errors.pincode}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      fullWidth 
                      variant="contained" 
                      type="submit" 
                      color="primary"
                    >
                      Deliver Here
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};