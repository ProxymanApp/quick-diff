import React from 'react'
import Editor from "@monaco-editor/react";
import CustomButton from "../button/CustomButton";

const InputEditor = ({
    value,
    onChange,
    handleClipboard,
    handleClear,
    language,
    styling,
  }) => {
    return (
      <div className="flex flex-col md:w-1/2 h-full">
        <Editor
          className="w-full h-full border border-gray-200 shadow-md"
          theme="vs-light"
          language={language}
          value={value}
          onChange={onChange}
          options={{
            scrollbar: {
              horizontalScrollbarSize: 0,
              verticalScrollbarSize: 0,
            },
            wordWrap: "on",
            scrollBeyondLastLine: false,
          }}
        />
        <div className="flex flex-row gap-2 mt-4" style={styling}>
          <CustomButton handleOnClick={handleClipboard}>Clipboard</CustomButton>
          <CustomButton handleOnClick={handleClear}>Clear</CustomButton>
        </div>
      </div>
    );
  };

export default InputEditor