import { ReactNode, forwardRef } from 'react'
import { Container, Footer } from '@omegup-school/ui-atoms'

export interface LayoutProps {
  sideBar: ReactNode,
  navBar: ReactNode,
}
export interface ControlledLayoutProps extends LayoutProps {
  children: ReactNode
}

export const Layout = forwardRef((
  { navBar, sideBar, children }: ControlledLayoutProps,
  ref: React.Ref<HTMLDivElement>
) => {

  return (
    <Container ref={ref}>
      {sideBar}
      <div>
        {navBar}
        <main>{children}</main>
        <Footer />
      </div>
    </Container>
  )
})

