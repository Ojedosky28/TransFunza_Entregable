import React from 'react';
import { StyleSheet, View, Image, TextInput, KeyboardType } from 'react-native';
import { MyColors } from '../theme/AppTheme';

interface Props {
  image: any;
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}

export const CustomTextInput = ({
  image,
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.formInput}>
      <Image style={styles.formIcon} source={image} />
      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        placeholderTextColor={MyColors.textSecondary}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
    tintColor: MyColors.primary,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.border,
    marginLeft: 15,
    paddingVertical: 8,
    color: MyColors.text,
    fontSize: 16,
  },
});
