import { useState } from "react";
import { IMaskInput } from "react-imask";
import styled from "styled-components";

const BirthdayCertificate = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");

  return (
    <>
      <label> Свидетельство о рождении: </label>
      <StyledIMaskInput
        mask="L[LLL]-CC 000000"
        definitions={{
          L: /[XVI]/, // Latin Numbers
          C: /[А-Яа-я]/, // Cyrillic letters
        }}
        lazy={value ? false : true}
        value={value}
        unmask={true} // true|false|'typed'
        inputRef={(el) => {
          setInput(el);
        }} // access to nested input
        // DO NOT USE onChange TO HANDLE CHANGES!
        // USE onAccept INSTEAD
        onAccept={
          // depending on prop above first argument is
          // `value` if `unmask=false`,
          // `unmaskedValue` if `unmask=true`,
          // `typedValue` if `unmask='typed'`
          (value, mask) => setValue(value)
        }
        // ...and more mask props in a guide

        // input props also available
        placeholder="Введите свидетельство о рождении"
      />
      <br />
      Значение: {value}
    </>
  );
};

const StyledIMaskInput = styled(IMaskInput)`
  width: 230px;
`;

export default BirthdayCertificate;
