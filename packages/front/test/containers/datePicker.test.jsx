import React from "react";
import { shallow } from "enzyme";
import DatePicker from "containers/DatePicker";
import IntlProvider from "containers/IntlProvider";
import { defaultStore } from "../constants";

describe("components/DatePicker", () => {
  it("renders in initial state", () => {
    const wrapper = shallow(
      <IntlProvider store={defaultStore}>
        <DatePicker placeholder="Select date:" selected={undefined} onChange={() => undefined} />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
