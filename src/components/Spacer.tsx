interface SpacerProps {
  layer: 2 | 3 | 4 | 5;
}

const Spacer = ({ layer }: SpacerProps) => {
  return (
    <div
      className="w-full bg-no-repeat bg-center bg-cover"
      style={{
        aspectRatio: '960/300',
        backgroundImage: `url(/assets/layer${layer}.svg)`,
      }}
      aria-hidden="true"
    />
  );
};

export default Spacer;
