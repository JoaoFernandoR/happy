import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Orphanage from './Orphanage'

// Utilizar um decorator, usado em classes, propriedades ou funções, utilizando esse decorator
// automaticamente o typeorm já vai saber que essa classe está associada a nossa tabela

@Entity('images')
export default class Image {  // Classe do Javascript, nada a ver com banco de dados
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id'})
    orphanage: Orphanage
}