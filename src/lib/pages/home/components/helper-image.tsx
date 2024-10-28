import { Tooltip } from '@/components/ui/tooltip';
import { Image } from '@chakra-ui/react';

type HelperImageProps = {
  label?: string;
  src: string;
};

const size = 5;

export const HelperImage = ({ label = '', src }: HelperImageProps) => {
  return (
    <Tooltip showArrow aria-label={label} content={label}>
      <Image src={src} alt={label} title={label} height={size} width={size} />
    </Tooltip>
  );
};
