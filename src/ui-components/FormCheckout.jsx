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
import { HealthcareProvider } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Flex,
  Image,
  SelectField,
  Text,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
  const { overrides, ...rest } = props;
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
  const [textFieldTwoNineSevenSixSevenZeroOneFour, setTextFieldTwoNineSevenSixSevenZeroOneFour] = useStateMutationAction("");
  const [textFieldTwoNineSevenSixSevenZeroOneFive, setTextFieldTwoNineSevenSixSevenZeroOneFive] = useStateMutationAction("");
  const [textFieldThreeNineThreeFourThreeOneTwoSix, setTextFieldThreeNineThreeFourThreeOneTwoSix] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    model: HealthcareProvider,
    fields: {
      name: textFieldTwoNineSevenSixSevenZeroZeroNineValue,
      website: textFieldTwoNineSevenSixSevenZeroOneZeroValue,
      hoursOfOperation: "[]",
      speciality: textFieldThreeNineThreeFourThreeOneThreeFourValue,
      address: {
        street: textFieldTwoNineSevenSixSevenZeroOneFour,
        city: textFieldTwoNineSevenSixSevenZeroOneFive,
        postalCode: textFieldThreeNineThreeFourThreeOneTwoSix,
        province: selectedProvince,
      },
      contact: textFieldThreeNineThreeFourThreeOneSixFiveValue,
    },
    schema: schema,
  });
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
              value={textFieldTwoNineSevenSixSevenZeroOneFour}
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
                value={textFieldTwoNineSevenSixSevenZeroOneFive}
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
                value={textFieldThreeNineThreeFourThreeOneTwoSix}
                onChange={(event) => {
                  setTextFieldThreeNineThreeFourThreeOneTwoSix(
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
                options={['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT']}
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
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Add provider"
              onClick={() => {
                buttonOnClick();
              }}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
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
          <Image
            width="483px"
            height="488px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="contain"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
