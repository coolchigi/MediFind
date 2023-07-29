/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HealthcareProvider } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EditProviderInputValues = {
    name?: string;
    website?: string;
    Field1?: string;
    Field0?: string;
    contact?: string;
    speciality?: string;
};
export declare type EditProviderValidationValues = {
    name?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    contact?: ValidationFunction<string>;
    speciality?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditProviderOverridesProps = {
    EditProviderGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<AutocompleteProps>;
    contact?: PrimitiveOverrideProps<TextFieldProps>;
    speciality?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EditProviderProps = React.PropsWithChildren<{
    overrides?: EditProviderOverridesProps | undefined | null;
} & {
    id?: string;
    healthcareProvider?: HealthcareProvider;
    onSubmit?: (fields: EditProviderInputValues) => EditProviderInputValues;
    onSuccess?: (fields: EditProviderInputValues) => void;
    onError?: (fields: EditProviderInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EditProviderInputValues) => EditProviderInputValues;
    onValidate?: EditProviderValidationValues;
} & React.CSSProperties>;
export default function EditProvider(props: EditProviderProps): React.ReactElement;
