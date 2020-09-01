import { Tooltip, Image } from "@chakra-ui/core";

type HelperImageProps = {
  label?: string;
  src: string;
};

const HelperImage = ({ label, src }: HelperImageProps) => {
  return (
    <Tooltip hasArrow aria-label={label} label={label} placement="auto-end">
      <Image src={src} title={label} maxHeight="33px" marginX={2} />
    </Tooltip>
  );
};

export default HelperImage;
