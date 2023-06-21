import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="136" cy="134" r="125" /> 
    <rect x="0" y="320" rx="10" ry="10" width="280" height="80" /> 
    <rect x="0" y="425" rx="10" ry="10" width="100" height="30" /> 
    <rect x="127" y="420" rx="18" ry="18" width="150" height="40" /> 
    <rect x="0" y="280" rx="10" ry="10" width="280" height="30" />
  </ContentLoader>
)

export default Skeleton;

