import { Editor } from "~/pages/components/editor";

const DocPage = () => {
    return (
        <Editor
      post={{
        id: "000",
        title: "My First Post",
        content: {},
        published: false,
      }}
    />
    )
}

export default DocPage;