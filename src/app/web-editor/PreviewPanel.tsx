import { FC } from 'react';

interface Props {
  preview: string;
}

const PreviewPanel: FC<Props> = ({ preview }) => {
  return (
    <iframe
      className="w-full h-full border"
      sandbox="allow-scripts allow-same-origin"
      srcDoc={preview}
    />
  );
};

export default PreviewPanel;
