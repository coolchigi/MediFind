/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Button,
  Flex,
  Grid,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { HealthcareProvider } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EditProvider(props) {
  const {
    id: idProp,
    healthcareProvider: healthcareProviderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    website: "",
    Field1: "",
    Field0: undefined,
    contact: "",
    speciality: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [Field1, setField1] = React.useState(initialValues.Field1);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [contact, setContact] = React.useState(initialValues.contact);
  const [speciality, setSpeciality] = React.useState(initialValues.speciality);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = healthcareProviderRecord
      ? { ...initialValues, ...healthcareProviderRecord }
      : initialValues;
    setName(cleanValues.name);
    setWebsite(cleanValues.website);
    setField1(cleanValues.Field1);
    setField0(cleanValues.Field0);
    setContact(cleanValues.contact);
    setSpeciality(cleanValues.speciality);
    setErrors({});
  };
  const [healthcareProviderRecord, setHealthcareProviderRecord] =
    React.useState(healthcareProviderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(HealthcareProvider, idProp)
        : healthcareProviderModelProp;
      setHealthcareProviderRecord(record);
    };
    queryData();
  }, [idProp, healthcareProviderModelProp]);
  React.useEffect(resetStateValues, [healthcareProviderRecord]);
  const validations = {
    name: [{ type: "Required" }],
    website: [{ type: "Required" }],
    Field1: [],
    Field0: [],
    contact: [{ type: "Required" }],
    speciality: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          website,
          Field1,
          Field0,
          contact,
          speciality,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            website: modelFields.website,
            contact: modelFields.contact,
            speciality: modelFields.speciality,
          };
          await DataStore.save(
            HealthcareProvider.copyOf(healthcareProviderRecord, (updated) => {
              Object.assign(updated, modelFieldsToSave);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EditProvider")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              website,
              Field1,
              Field0,
              contact,
              speciality,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Website</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website: value,
              Field1,
              Field0,
              contact,
              speciality,
            };
            const result = onChange(modelFields);
            value = result?.website ?? value;
          }
          if (errors.website?.hasError) {
            runValidationTasks("website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("website", website)}
        errorMessage={errors.website?.errorMessage}
        hasError={errors.website?.hasError}
        {...getOverrideProps(overrides, "website")}
      ></TextField>
      <TextField
        label="City"
        value={Field1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              Field1: value,
              Field0,
              contact,
              speciality,
            };
            const result = onChange(modelFields);
            value = result?.Field1 ?? value;
          }
          if (errors.Field1?.hasError) {
            runValidationTasks("Field1", value);
          }
          setField1(value);
        }}
        onBlur={() => runValidationTasks("Field1", Field1)}
        errorMessage={errors.Field1?.errorMessage}
        hasError={errors.Field1?.hasError}
        {...getOverrideProps(overrides, "Field1")}
      ></TextField>
      <Autocomplete
        label="Province"
        options={[
          {
            id: "Ontario",
            label: "Ontario",
          },
          {
            id: "Quebec",
            label: "Quebec",
          },
          {
            id: " Nova Scotia",
            label: " Nova Scotia",
          },
          {
            id: "New Brunswick",
            label: "New Brunswick",
          },
          {
            id: "Manitoba",
            label: "Manitoba",
          },
          {
            id: "British Columbia",
            label: "British Columbia",
          },
          {
            id: "Prince Edward Island",
            label: "Prince Edward Island",
          },
          {
            id: " Saskatchewan",
            label: " Saskatchewan",
          },
          {
            id: "Alberta",
            label: "Alberta",
          },
          {
            id: "Newfoundland and Labrador",
            label: "Newfoundland and Labrador",
          },
        ]}
        onSelect={({ id, label }) => {
          setField0(id);
          runValidationTasks("Field0", id);
        }}
        onClear={() => {
          setField0("");
        }}
        defaultValue={Field0}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              Field1,
              Field0: value,
              contact,
              speciality,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "Field0")}
      ></Autocomplete>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Contact</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={contact}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              Field1,
              Field0,
              contact: value,
              speciality,
            };
            const result = onChange(modelFields);
            value = result?.contact ?? value;
          }
          if (errors.contact?.hasError) {
            runValidationTasks("contact", value);
          }
          setContact(value);
        }}
        onBlur={() => runValidationTasks("contact", contact)}
        errorMessage={errors.contact?.errorMessage}
        hasError={errors.contact?.hasError}
        {...getOverrideProps(overrides, "contact")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Speciality</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={speciality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              website,
              Field1,
              Field0,
              contact,
              speciality: value,
            };
            const result = onChange(modelFields);
            value = result?.speciality ?? value;
          }
          if (errors.speciality?.hasError) {
            runValidationTasks("speciality", value);
          }
          setSpeciality(value);
        }}
        onBlur={() => runValidationTasks("speciality", speciality)}
        errorMessage={errors.speciality?.errorMessage}
        hasError={errors.speciality?.hasError}
        {...getOverrideProps(overrides, "speciality")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Edit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || healthcareProviderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
