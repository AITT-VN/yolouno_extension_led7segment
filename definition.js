const TM1637ColorBlock = "#33a5aa";

var digitalPins = [
  [
    "D3",
    "D3"
  ],
  [
    "D4",
    "D4"
  ],
  [
    "D5",
    "D5"
  ],
  [
    "D6",
    "D6"
  ],
  [
    "D7",
    "D7"
  ],
  [
    "D8",
    "D8"
  ],
  [
    "D9",
    "D9"
  ],
  [
    "D10",
    "D10"
  ],
  [
    "D11",
    "D11"
  ],
  [
    "D12",
    "D12"
  ],
  [
    "D13",
    "D13"
  ],
  [
    "D0",
    "D0"
  ],
  [
    "D1",
    "D1"
  ],
  [
    "D2",
    "D2"
  ]
];

Blockly.Blocks["uno_tm1637_create"] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      type: "uno_tm1637_create",
      message0: "khởi tạo module led 7 đoạn chân CLK %1 chân DATA %2",
      args0: [
        {
          type: "field_dropdown",
          name: "CLK",
          options: digitalPins
        },
        {
          type: "field_dropdown",
          name: "DATA",
          options: digitalPins
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: TM1637ColorBlock,
      tooltip: "",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["tm1637"];
  },
};

Blockly.Python["uno_tm1637_create"] = function (block) {
  var dropdown_clk = block.getFieldValue("CLK");
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_["import_tm1637"] = "from tm1637 import *";
  Blockly.Python.definitions_['init_tm1637'] = "tm1637 = TM1637(dio=" + dropdown_data + "_PIN, clk=" + dropdown_clk + "_PIN)";
  var code = '';
  return code;
};

Blockly.Blocks["uno_tm1637_show_number"] = {
  init: function () {
    this.jsonInit({
      colour: TM1637ColorBlock,
      nextStatement: null,
      previousStatement: null,
      tooltip: "Hiện số lên màn hình led 4 số",
      message0: "led 4 số hiện số %1 %2",
      args0: [
        { type: "input_value", name: "value", check: "Number" },
        { type: "input_dummy" },
      ],
      helpUrl: "",
    });
  },
};

Blockly.Python["uno_tm1637_show_number"] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_MEMBER
  );
  var code = "tm1637.number(" + value_text + ")\n";
  return code;
};

Blockly.Blocks["uno_tm1637_show_text"] = {
  init: function () {
    this.jsonInit({
      colour: TM1637ColorBlock,
      nextStatement: null,
      previousStatement: null,
      message0: "led 4 số hiện chữ %1 %2",
      args0: [
        { type: "input_value", name: "value" },
        { type: "input_dummy" },
      ],
      tooltip: "Hiện chữ lên màn hình led 4 số",
      helpUrl: "",
    });
  },
};

Blockly.Python["uno_tm1637_show_text"] = function (block) {
  var dropdown_port = block.getFieldValue("port");
  var value_text = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_MEMBER
  );
  var code = "tm1637.show(" + value_text + ")\n";
  return code;
};

Blockly.Blocks["uno_tm1637_scroll"] = {
  init: function () {
    this.jsonInit({
      colour: TM1637ColorBlock,
      nextStatement: null,
      previousStatement: null,
      tooltip: "",
      message0: "led 4 số cổng chạy chữ %1 tốc độ (ms) %2 %3",
      args0: [
        { type: "input_value", name: "value" },
        { type: "input_value", name: "speed", check: "Number" },
        { type: "input_dummy" },
      ],
      tooltip: "Chạy dòng chữ lên màn hình led 4 số",
      helpUrl: "",
    });
  },
};

Blockly.Python["uno_tm1637_scroll"] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_MEMBER
  );
  var speed = Blockly.Python.valueToCode(
    block,
    "speed",
    Blockly.Python.ORDER_MEMBER
  );
  var code = "tm1637.scroll(" + value_text + ", " + speed + ")\n";
  return code;
};

Blockly.Blocks["uno_tm1637_temperature"] = {
  init: function () {
    this.jsonInit({
      colour: TM1637ColorBlock,
      nextStatement: null,
      previousStatement: null,
      message0: "led 4 số hiện nhiệt độ %1 %2",
      args0: [
        { type: "input_value", name: "value", check: "Number" },
        { type: "input_dummy" },
      ],
      tooltip: "Hiện nhiệt độ lên màn hình led 4 số",
      helpUrl: "",
    });
  },
};

Blockly.Python["uno_tm1637_temperature"] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_MEMBER
  );
  var code = "tm1637.temperature(" + value_text + ")\n";
  return code;
};

Blockly.Blocks["uno_tm1637_brightness"] = {
  init: function () {
    this.jsonInit({
      colour: TM1637ColorBlock,
      nextStatement: null,
      previousStatement: null,
      message0: "led 4 số thay đổi độ sáng (0-7) %1 %2",
      args0: [
        { type: "input_value", name: "value", check: "Number" },
        { type: "input_dummy" },
      ],
      tooltip: "Thay đổi độ sáng của màn hình led 4 số",
      helpUrl: "",
    });
  },
};

Blockly.Python["uno_tm1637_brightness"] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "value",
    Blockly.Python.ORDER_MEMBER
  );
  var code = "tm1637.brightness(" + value_text + ")\n";
  return code;
};
