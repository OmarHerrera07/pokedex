import { Avatar, Menu } from "@mantine/core";

export default function Sesion() {
  return (
    <div className="mr-10">
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Avatar
            size={50}
            color="initials"
            name="Usuario"
            className="cursor-pointer"
            allowedInitialsColors={['var(--color-secondary-600)']}
            styles={
              {
                placeholder: {
                  backgroundColor: 'white'
                }
              }
            }
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label
            style={{
              color: 'var(--primary-500)',
              fontSize:14
            }}
          >
            {'Ivitado'}
          </Menu.Label>
          <Menu.Item 
            styles={{
              item: {
                backgroundColor: 'var(--color-info-200)'
              }
            }}
          >
            Iniciar Sesión
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}
