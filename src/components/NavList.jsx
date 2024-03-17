import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

const NavList = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb /> },
        { id: 2, name: 'Archives', icon: <Archive /> },
        { id: 3, name: 'Trash', icon: <Delete /> },
    ]
    
    return (
        <List>
        {
            navList.map(list => (
                <ListItem button key={list.id}>
                        <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                </ListItem>
            ))
        }
        </List>
    )
}

export default NavList;