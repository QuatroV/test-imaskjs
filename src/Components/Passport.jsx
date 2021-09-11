import { useState } from "react";
import { IMaskInput } from "react-imask";
import styled from "styled-components";

const Passport = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");

  return (
    <div>
      <label> Номер паспорта: </label>
      <StyledIMaskInput
        mask="0000 000000"
        lazy={!value}
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
        placeholder="Введите номер паспорта"
      />
      <br />
      Значение: {value}
    </div>
  );
};

const StyledIMaskInput = styled(IMaskInput)`
  width: 230px;
`;

export default Passport;
