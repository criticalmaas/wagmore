import Link from "next/link"
// Fixes the way React-Bootstrap passes props that next/Link cannot handle
const LinkFixer = props => {
  const {
    className,
    active,
    activeKey,
    activeHref,
    onSelect,
    children,
    ...otherProps
  } = props

  return <Link {...otherProps}>{children}</Link>
}

export default LinkFixer
