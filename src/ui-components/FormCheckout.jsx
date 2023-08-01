/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { createHealthcareProvider } from "../graphql/mutations";
import {
  Button,
  Flex,
  Image,
  SelectField,
  Text,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useState } from 'react';
export default function FormCheckout(props) {
  const { overrides, ...rest } = props;
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedProvince, setSelectedProvince] = React.useState("");
  const [
    textFieldTwoNineSevenSixSevenZeroZeroNineValue,
    setTextFieldTwoNineSevenSixSevenZeroZeroNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSevenZeroOneZeroValue,
    setTextFieldTwoNineSevenSixSevenZeroOneZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineThreeFourThreeOneThreeFourValue,
    setTextFieldThreeNineThreeFourThreeOneThreeFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineThreeFourThreeOneSixFiveValue,
    setTextFieldThreeNineThreeFourThreeOneSixFiveValue,
  ] = useStateMutationAction("");

  // Street 
  const [textFieldTwoNineSevenSixSevenZeroOneFourValue, setTextFieldTwoNineSevenSixSevenZeroOneFour] = useStateMutationAction("");
  // City
  const [textFieldTwoNineSevenSixSevenZeroOneFiveValue, setTextFieldTwoNineSevenSixSevenZeroOneFive] = useStateMutationAction("");
  // Postal Code
  const [textFieldThreeNineThreeFourThreeOneTwoSixValue, setTextFieldThreeNineThreeFourThreeOneTwoSix] = useStateMutationAction("");
  // Country
  const [textFieldThreeNineThreeFourThreeOneTwoFiveValue, setTextFieldThreeNineThreeFourThreeOneTwoFive] = useStateMutationAction("");

  // Operating Hours
  const [textAreaFieldValue, setTextTextAreaField] = useStateMutationAction("");

  const convertHoursOfOperation = (hoursString) => {
    const days = hoursString.split('\n');
    const hoursOfOperation = [];

    days.forEach((day) => {
      const dayInfo = day.trim().split(' ');

      if (dayInfo.length === 3) {
        // Format: Monday 10am 5pm (single-day format)
        const [dayOfWeek, startTime, endTime] = dayInfo;
        const formattedDay = {
          dayOfWeek,
          openTime: startTime,
          closeTime: endTime,
        };
        hoursOfOperation.push(formattedDay);
      } else {
        let i = 0;
        while (i < dayInfo.length) {
          const dayOfWeek = dayInfo[i++];
          const startTime = dayInfo[i++];
          const endTime = dayInfo[i++];
          const formattedDay = {
            dayOfWeek,
            openTime: startTime,
            closeTime: endTime,
          };
          hoursOfOperation.push(formattedDay);
        }
      }
    });

    return hoursOfOperation;
  };

  const createHealthCareProFunction = async () => {
    try {
      const hrsOfOperation = convertHoursOfOperation(textAreaFieldValue);
      const providerInput = {
        name: textFieldTwoNineSevenSixSevenZeroZeroNineValue,
        website: textFieldTwoNineSevenSixSevenZeroOneZeroValue,
        hoursOfOperation: hrsOfOperation,
        speciality: textFieldThreeNineThreeFourThreeOneThreeFourValue,
        address: {
          street: textFieldTwoNineSevenSixSevenZeroOneFourValue,
          city: textFieldTwoNineSevenSixSevenZeroOneFiveValue,
          postalCode: textFieldThreeNineThreeFourThreeOneTwoSixValue,
          province: selectedProvince,
          country: textFieldThreeNineThreeFourThreeOneTwoFiveValue,
        },
        contact: textFieldThreeNineThreeFourThreeOneSixFiveValue
      }
      const result = await API.graphql({ query: createHealthcareProvider, variables: { input: providerInput } });
      console.log(result);

      setTextFieldTwoNineSevenSixSevenZeroZeroNineValue("")
      setTextFieldTwoNineSevenSixSevenZeroOneZeroValue("")
      setTextFieldThreeNineThreeFourThreeOneThreeFourValue("")
      setTextFieldThreeNineThreeFourThreeOneSixFiveValue("")
      setTextFieldTwoNineSevenSixSevenZeroOneFour("")
      setTextFieldTwoNineSevenSixSevenZeroOneFive("")
      setTextFieldThreeNineThreeFourThreeOneTwoSix("")
      setTextFieldThreeNineThreeFourThreeOneTwoFive("")
      setSelectedProvince("")
      setTextTextAreaField("")


      setSuccessMessage('Healthcare provider added successfully!');
    } catch (err) {
      console.error('Error adding healthcare providers:', err);
    }
  }
  return (
    <Flex
      gap="48px"
      direction="row"
      width="1160px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FormCheckout")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 41129767005")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Healthcare Provider Information"
              {...getOverrideProps(
                overrides,
                "HealthCare Provider Information"
              )}
            ></Text>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 426")}
            >
              <TextField
                width="unset"
                height="unset"
                label="Name"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={textFieldTwoNineSevenSixSevenZeroZeroNineValue}
                onChange={(event) => {
                  setTextFieldTwoNineSevenSixSevenZeroZeroNineValue(
                    event.target.value
                  );
                }}
                {...getOverrideProps(overrides, "TextField29767009")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="Website"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={textFieldTwoNineSevenSixSevenZeroOneZeroValue}
                onChange={(event) => {
                  setTextFieldTwoNineSevenSixSevenZeroOneZeroValue(
                    event.target.value
                  );
                }}
                {...getOverrideProps(overrides, "TextField29767010")}
              ></TextField>
            </Flex>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
            <TextField
              width="unset"
              height="unset"
              label="Street address"
              shrink="0"
              alignSelf="stretch"
              placeholder=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldTwoNineSevenSixSevenZeroOneFourValue}
              onChange={(event) => {
                setTextFieldTwoNineSevenSixSevenZeroOneFour(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField29767014")}
            ></TextField>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 425")}
            >
              <TextField
                width="unset"
                height="unset"
                label="City"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={textFieldTwoNineSevenSixSevenZeroOneFiveValue}
                onChange={(event) => {
                  setTextFieldTwoNineSevenSixSevenZeroOneFive(
                    event.target.value
                  );
                }}
                {...getOverrideProps(overrides, "TextField29767015")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="Postal Code"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={textFieldThreeNineThreeFourThreeOneTwoSixValue}
                onChange={(event) => {
                  setTextFieldThreeNineThreeFourThreeOneTwoSix(
                    event.target.value
                  );
                }}
                {...getOverrideProps(overrides, "TextField39343126")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="Country"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={textFieldThreeNineThreeFourThreeOneTwoFiveValue}
                onChange={(event) => {
                  setTextFieldThreeNineThreeFourThreeOneTwoFive(
                    event.target.value
                  );
                }}
                {...getOverrideProps(overrides, "TextField39343126")}
              ></TextField>
              <SelectField
                width="100px"
                height="unset"
                label="Province"
                shrink="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                options={['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK']}
                variation="default"
                value={selectedProvince}
                onChange={(event) => setSelectedProvince(event.target.value)}
                {...getOverrideProps(overrides, "SelectField")}
              ></SelectField>
            </Flex>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 410")}
          >
            <Flex
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 437")}
            >
              <TextField
                width="unset"
                height="unset"
                label="Specialty"
                shrink="0"
                alignSelf="stretch"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={textFieldThreeNineThreeFourThreeOneThreeFourValue}
                onChange={(event) => {
                  setTextFieldThreeNineThreeFourThreeOneThreeFourValue(
                    event.target.value
                  );
                }}
                {...getOverrideProps(overrides, "TextField39343134")}
              ></TextField>
            </Flex>
            <Flex
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 438")}
            >
              <TextField
                width="unset"
                height="unset"
                label="Contact"
                shrink="0"
                alignSelf="stretch"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={textFieldThreeNineThreeFourThreeOneSixFiveValue}
                onChange={(event) => {
                  setTextFieldThreeNineThreeFourThreeOneSixFiveValue(
                    event.target.value
                  );
                }}
                {...getOverrideProps(overrides, "TextField39343165")}
              ></TextField>
            </Flex>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 412")}
          >
            <TextAreaField
              width="491px"
              height="100px"
              label="Operating Hours"
              shrink="0"
              placeholder=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              onChange={(event) => {
                setTextTextAreaField(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextAreaField")}
            ></TextAreaField>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 41139343187")}
          >
            <Button
              width="unset"
              backgroundColor="#1a237e"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Add provider"
              onClick={
                createHealthCareProFunction
              }
              {...getOverrideProps(overrides, "Button")}
            ></Button>
            {successMessage && <p>{successMessage}</p>}
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          width="556px"
          height="533px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 32px 0px 32px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 4113975370")}
        >
        </Flex>
      </Flex>
    </Flex>
  );
}