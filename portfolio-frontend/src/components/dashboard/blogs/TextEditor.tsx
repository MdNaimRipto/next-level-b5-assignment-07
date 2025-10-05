/* eslint-disable @typescript-eslint/no-explicit-any */
import { Editor } from "@tinymce/tinymce-react";
import React, { SetStateAction } from "react";

const TextEditor = ({
  setContent,
  content,
}: {
  setContent: React.Dispatch<SetStateAction<string>>;
  content: string;
}) => {
  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_EDITOR_KEY}
      onEditorChange={(newValue) => setContent(newValue)} // ✅ Capture text
      init={{
        plugins: [
          // Core editing features
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "link",
          "lists",
          "media",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until Oct 16, 2025:
          "checklist",
          "mediaembed",
          "casechange",
          "formatpainter",
          "pageembed",
          "a11ychecker",
          "tinymcespellchecker",
          "permanentpen",
          "powerpaste",
          "advtable",
          "advcode",
          "advtemplate",
          "ai",
          "uploadcare",
          "mentions",
          "tinycomments",
          "tableofcontents",
          "footnotes",
          "mergetags",
          "autocorrect",
          "typography",
          "inlinecss",
          "markdown",
          "importword",
          "exportword",
          "exportpdf",
        ],
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        ai_request: (
          request: any,
          respondWith: { string: (arg0: () => Promise<never>) => any }
        ) =>
          respondWith.string(() =>
            Promise.reject("See docs to implement AI Assistant")
          ),
        uploadcare_public_key: "2edce43b41f5160146f5",
      }}
      initialValue={content ? content : "Enter Description"}
    />
  );
};

export default TextEditor;
