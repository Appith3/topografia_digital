import { StyleSheet } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import PropTypes from 'prop-types';

const SectionItem = (props) => {

	const {
		tittle,
		listId,
		isComplete = false,
		details,
		navigation
	} = props;

	return (
		<List.Item
			title={tittle}
			// TODO: add if exist section code add it on title prop
			description={
				isComplete
					? 'Completa'
					: null
			}
			right={() => (
				<>
					<IconButton icon='delete' iconColor='#F17878' onPress={() => console.log(`Deleted item ${listId}`)} />
					<IconButton icon='chevron-right' iconColor='#F5F7FA' onPress={() => {
						isComplete
							? navigation.navigate('sectionDetail', { stationing: details })
							: navigation.navigate('captureCentral', { stationing: details });
					}} />
				</>
			)}
			style={
				isComplete
					? [styles.listItem, styles.borderCompleted]
					: styles.listItem
			}
			titleStyle={styles.title}
			descriptionStyle={styles.description}
			onPress={() => {
				isComplete
					? navigation.navigate('sectionDetail', { stationing: details })
					: navigation.navigate('captureCentral', { stationing: details });
			}}
		/>
	);
};

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: '#446585',
		borderRadius: 4,
		marginVertical: 8
	},
	borderCompleted: {
		borderColor: '#369361',
		borderStyle: 'solid',
		borderWidth: 2
	},
	chip: {
		borderRadius: 24,
		backgroundColor: '#369361',
		height: 32,
		alignSelf: 'center'
	},
	title: {
		color: '#F5F7FA'
	},
	description: {
		color: '#DAF1E0',
		textDecorationLine: 'underline'
	}
});

SectionItem.propTypes = {
	tittle: PropTypes.string,
	listId: PropTypes.string || PropTypes.number,
	details: PropTypes.object,
	navigation: PropTypes.object,
	isComplete: PropTypes.bool
};

export default SectionItem;