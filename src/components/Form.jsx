/* eslint-disable */
import { Box, Grid } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import QrCode from "./QrCode.svg";
import { FormButtons } from "./FormButtons";
import { QrCodeReaderModal } from "./QrCodeReaderModal";
import TextFormField from "./TextFormField";

function getInitialValues(fields) {
  return fields.reduce((acc, curr) => {
    return { [curr.name]: curr.value, ...acc };
  }, {});
}
export default function Form() {
  const [openModal, setOpenModal] = React.useState(false);
  const fields = [
    {
      name: "name",
      value: "",
      type: "string",
      label: "Nome",
    },
    {
      name: "surname",
      value: "",
      type: "string",
      label: "Cognome",
    },
  ];

  const validate = (values) => {
    const errors = {};

    return errors;
  };

  const formRef = React.useRef(null);
  const initialValues = getInitialValues(fields);

  return (
    <>
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validate={validate}
        onSubmit={() => {}}
      >
        {(formikProps) => {
          const {
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            values,
          } = formikProps;

          return (
            <Box display="flex">
              <Box
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setOpenModal(true);
                }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                flex={0.1}
                marginRight="36px"
              >
                <img src={QrCode} alt="qr-code" />
                <Box marginTop="12px">Scansiona QR Code</Box>
              </Box>

              <QrCodeReaderModal
                title="QR Code"
                onScan={(qrCode) => {
                  if (qrCode) {
                    setOpenModal(false);
                    formikProps.setFieldValue("name", qrCode);
                  }
                }}
                open={openModal}
                setOpen={setOpenModal}
              />

              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} xl={6}>
                  <TextFormField
                    fullWidth
                    errorText=""
                    error={false}
                    label="Nome"
                    id="name"
                    type="name"
                    value={values.name}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6} xl={6}>
                  <TextFormField
                    fullWidth
                    errorText=""
                    error={false}
                    label="Cognome"
                    id="surname"
                    type="surname"
                    value={values.surname}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </Grid>
              </Grid>
            </Box>
          );
        }}
      </Formik>

      <FormButtons
        isValid={true}
        handleSubmit={() => {}}
        handleCancel={() => {}}
      />
    </>
  );
}
