import { Component } from "@angular/core";
import * as changeCase from "change-case";

@Component({
  selector: "app-variable",
  templateUrl: "variable.page.html",
  styleUrls: ["variable.page.scss"],
})
export class VariablePage {
  // json文本框显示行数
  rows = 20;
  // json文本框值
  variableValue = "";
  errorMessage = "";
  type_select = "";
  successMessage = "";
  format_types = [
    // Transform into a string with the separator denoted by the next word capitalized.
    {
      value: "camel",
      name: "驼峰命名 testString",
    },
    // Transform into upper case string with an underscore between words.
    {
      value: "constant",
      name: "下划线命名 TEST_STRING",
    },
    // Transform into a lower cased string with dashes between words.
    {
      value: "param",
      name: "中横杠命名 test-string",
    },
    // Transforms the string to lower case.
    {
      value: "lower",
      name: "小写命名 test string",
    },
    // Transforms the string to upper case.
    {
      value: "upper",
      name: "大写命名 TEST STRING",
    },
  ];

  constructor() {}

  // 格式化
  format() {
    if (this.nullCheck()) return;
    try {
      switch (this.type_select) {
        case "camel":
          this.variableValue = changeCase.camelCase(this.variableValue);
          break;
        case "constant":
          this.variableValue = changeCase.constantCase(this.variableValue);
          break;
        case "param":
          this.variableValue = changeCase.paramCase(this.variableValue);
          break;
        case "lower":
          this.variableValue = this.variableValue.toLowerCase();
          break;
        case "upper":
          this.variableValue = this.variableValue.toUpperCase();
          break;
        default:
          return;
      }
      this.errorMessage = "";
      this.successMessage = "格式化完成";
    } catch (error) {
      this.successMessage = "";
      this.errorMessage = error.message;
    }
  }

  // 复制
  copy() {
    if (this.nullCheck()) return;
    const clipboard = require("copy-to-clipboard");
    clipboard(this.variableValue.trim());
    this.errorMessage = "";
    this.successMessage = "复制完成";
  }

  // 清空
  clear() {
    if (this.nullCheck()) return;
    this.variableValue = "";
    this.ionFocus();
  }

  // json 输入值变更
  ionFocus() {
    this.errorMessage = "";
    this.successMessage = "";
  }

  // 空 check
  nullCheck() {
    if (this.variableValue.trim() === "") {
      this.successMessage = "";
      this.errorMessage = "请输入需要转换的json字符串!";
      return true;
    }
    return false;
  }

  // 值替换
  replace(value: string) {
    const unixs = value.split("\n");
    const wins = value.split("\r\n");
    let values = [];
    if (unixs.length > wins.length) {
      values = unixs;
    } else {
      values = wins;
    }
    let replaceValue = "";
    values
      .filter((a: string) => a.trim() !== "")
      .forEach((b: string) => {
        if (replaceValue === "") {
          replaceValue += '("' + b + '"';
        } else {
          replaceValue += ', "' + b + '"';
        }
      });
    return replaceValue + ")";
  }
}
