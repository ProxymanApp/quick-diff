import React, { useState, useRef } from "react";
import { DiffEditor } from "@monaco-editor/react";
import DiffModeMenu from "./DiffModeMenu";
import InputEditor from "./InputEditor";
import CTAButton from "../button/CTAButton";
import { PANEL, DIFF_MODE, LANGUAGE } from "../../utils/Constants";
import LanguageComboBox from "./LanguageComboBox";

const diffModes = [
  { id: 1, mode: DIFF_MODE.SIDE_BY_SIDE },
  { id: 2, mode: DIFF_MODE.INLINE },
];

const defaultLanguage = {
  id: 1,
  name: LANGUAGE.JSON,
}

const defaultLeft = `{
  "timestamp": "2022-09-11T11:35:44+07:00",
  "event": "visit",
  "page": "home"
}`;

const defaultRight = `{
  "timestamp": "2022-09-22T09:40:44+07:00",
  "event": "click on button",
  "page": "user",
  "id": "ABCD"
}`;

const MonacoEditor = () => {
  const [leftInput, setLeftInput] = useState(defaultLeft);
  const [rightInput, setRightInput] = useState(defaultRight);

  const [diffObj, setDiffObj] = useState({
    left: defaultLeft,
    right: defaultRight,
  });

  const [showDiffEditor, setShowDiffEditor] = useState(false);
  const [diffConfig, setDiffConfig] = useState({
    diffMode: diffModes[0],
    language: defaultLanguage,
  });

  const [selectedDiffMode, setSelectedDiffMode] = useState(diffModes[0]);

  const handleShowDiff = () => {
    setShowDiffEditor((prev) => !prev);
    setDiffObj({
      left: leftInput,
      right: rightInput,
    });
  };

  const handleClipboard = async (panel) => {
    const textInput = await navigator.clipboard.readText();

    switch (panel) {
      case PANEL.LEFT:
        setLeftInput(textInput);
        break;
      case PANEL.RIGHT:
        setRightInput(textInput);
        break;
      default:
        break;
    }
  };

  const handleClear = (panel) => {
    switch (panel) {
      case PANEL.LEFT:
        setLeftInput("");
        break;
      case PANEL.RIGHT:
        setRightInput("");
        break;
      default:
        break;
    }
  };

  const handleInputChange = (panel, value) => {
    switch (panel) {
      case PANEL.LEFT:
        setLeftInput(value);
        break;
      case PANEL.RIGHT:
        setRightInput(value);
        break;
      default:
        break;
    }
  };

  const languageComboBoxDidSelect = (newLanguage) => {
    setDiffConfig({
      ...diffConfig,
      language: newLanguage
    })
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row justify-between items-end">
        <div className="flex flex-row gap-4 items-center">
          <LanguageComboBox selectedLanguage={diffConfig.language} setSelectedLanguage={languageComboBoxDidSelect}></LanguageComboBox>
          <DiffModeMenu selected={selectedDiffMode} setSelected={setSelectedDiffMode} diffModes={diffModes}/>
        </div>
        <div className="flex flex-row">
          <CTAButton handleOnClick={() => handleShowDiff()}>
            {showDiffEditor ? "Edit Input" : "Show Diff"}
          </CTAButton>
        </div>
      </div>

      {showDiffEditor ? (
        <div className="w-full editorContainer">
          <DiffEditor
            className="w-full h-full border border-gray-200 shadow-md"
            language={diffConfig.language.name}
            theme="vs-light"
            original={diffObj.left}
            modified={diffObj.right}
            options={{
              renderSideBySide: selectedDiffMode.mode === DIFF_MODE.SIDE_BY_SIDE,
              scrollbar: {
                horizontalScrollbarSize: 8,
                verticalScrollbarSize: 8,
              },
              readOnly: true,
              diffWordWrap: "on",
              scrollBeyondLastLine: false,
            }}
          />
        </div>
      ) : (
        <div className="flex flex-row w-full editorContainer">
          <InputEditor
            value={leftInput}
            onChange={(value) => handleInputChange(PANEL.LEFT, value)}
            handleClipboard={() => handleClipboard(PANEL.LEFT)}
            handleClear={() => handleClear(PANEL.LEFT)}
            language={diffConfig.language.name}
            styling={{ justifyContent: "flex-start" }}
          />
          <div className="w-4"></div>
          <InputEditor
            value={rightInput}
            onChange={(value) => handleInputChange(PANEL.RIGHT, value)}
            handleClipboard={() => handleClipboard(PANEL.RIGHT)}
            handleClear={() => handleClear(PANEL.RIGHT)}
            language={diffConfig.language.name}
            styling={{ justifyContent: "flex-end" }}
          />
        </div>
      )}
    </div>
  );
};

export default MonacoEditor;
